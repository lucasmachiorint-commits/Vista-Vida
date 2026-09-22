const { test, expect } = require('@playwright/test');

test.describe('Chácara Recanto das Águas — Testes E2E', () => {

  test('Deve carregar a página inicial com elementos estilo Airbnb', async ({ page }) => {
    await page.goto('/');

    // Check title and brand
    await expect(page).toHaveTitle(/Chácara Recanto das Águas/);
    await expect(page.locator('#display-title')).toContainText('Chácara Recanto das Águas');

    // Check specs
    await expect(page.locator('#spec-sleep')).toContainText('Dormem até 15');
    await expect(page.locator('#spec-event')).toContainText('Festas até 80');

    // Check photo mosaic has photos
    const mosaicItems = page.locator('.mosaic-item');
    await expect(mosaicItems).toHaveCount(5);

    // Check amenities
    const amenities = page.locator('.amenity-item');
    expect(await amenities.count()).toBeGreaterThanOrEqual(8);

    // Check rules and map
    await expect(page.locator('#rules-container')).toBeVisible();
    await expect(page.locator('#map-container')).toBeVisible();
  });

  test('Deve interagir com o mini-calendário e atualizar o simulador de preços', async ({ page }) => {
    await page.goto('/');

    // Click on available days in the calendar
    const availableDays = page.locator('.cal-day.available');
    expect(await availableDays.count()).toBeGreaterThan(5);

    // Select first and second available days
    await availableDays.nth(0).click();
    await availableDays.nth(2).click();

    // Check that dates are populated
    await expect(page.locator('#val-checkin')).not.toContainText('Adicionar data');
    await expect(page.locator('#val-checkout')).not.toContainText('Adicionar data');

    // Check that price breakdown total is computed
    await expect(page.locator('#breakdown-total-val')).toContainText('R$');
  });

  test('Deve abrir a Área do Proprietário (Admin CMS) com PIN 1234', async ({ page }) => {
    await page.goto('/');

    // Handle prompt
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('1234');
    });

    await page.locator('#btn-open-admin').click();

    // Check that admin view is active
    await expect(page.locator('#admin-view')).toHaveClass(/active/);
    await expect(page.locator('text=Painel do Proprietário (CMS Completo)')).toBeVisible();

    // Check tabs
    await expect(page.locator('[data-admin-tab="reservas"]')).toBeVisible();
    await expect(page.locator('[data-admin-tab="fotos"]')).toBeVisible();
    await expect(page.locator('[data-admin-tab="regras"]')).toBeVisible();
    await expect(page.locator('[data-admin-tab="localizacao"]')).toBeVisible();
    await expect(page.locator('[data-admin-tab="passeios"]')).toBeVisible();
  });

  test('Deve abrir o contrato de locação com cláusulas da Lei 14.063/2020 e GOV.BR', async ({ page }) => {
    await page.goto('/');

    page.on('dialog', async dialog => {
      if (dialog.type() === 'prompt') {
        await dialog.accept('1234');
      }
    });

    await page.locator('#btn-open-admin').click();

    // Click on "Contrato" in the first reservation
    const contractBtn = page.locator('button:has-text("📄 Contrato")').first();
    await contractBtn.click();

    // Check contract modal
    await expect(page.locator('#modal-contract-viewer')).toHaveClass(/active/);
    await expect(page.locator('#contract-paper-preview')).toContainText('CONTRATO DE LOCAÇÃO DE IMÓVEL POR TEMPORADA');
    await expect(page.locator('#contract-paper-preview')).toContainText('assinatura.gov.br');
    await expect(page.locator('#btn-download-contract-pdf')).toBeVisible();
  });

});
