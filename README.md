# Chácara Vista Vida — Site de Locação por Temporada

Aplicação web inspirada no design e experiência do **Airbnb** para locação da **Chácara Vista Vida** por temporada, com fluxo de solicitação e aprovação de reservas, CMS administrativo completo, gerador de contrato em PDF para assinatura no **GOV.BR**, e guia local do entorno.

---

## 🚀 Como Executar Localmente (Idêntico ao Painel OPS)

Abra o PowerShell na pasta do projeto e execute:

```powershell
.\server.ps1
```

O servidor local iniciará na porta 8080. Acesse no navegador:
👉 **`http://localhost:8080/`**

---

## 🌐 Publicação no GitHub Pages (URL Gratuita)

O projeto está configurado para deploy automático no GitHub Pages através do workflow em `.github/workflows/deploy.yml`.

Repositório configurado:
👉 **`https://github.com/lucasmachiorint-commits/Vista-Vida.git`**

Sua URL pública no GitHub Pages:
👉 **`https://lucasmachiorint-commits.github.io/Vista-Vida/`**

---

## 🔑 Acesso ao Painel do Proprietário (CMS Completo)

No canto superior direito da página, clique no botão **"Área do Proprietário"**.
* **PIN de Acesso Padrão:** `1234`

### Funcionalidades do CMS:
* **Fila de Reservas:** Visualizar solicitações pendentes, aprovar com 1 clique, recusar e emitir contrato.
* **Bloqueio de Datas:** Bloquear períodos específicos no calendário para manutenção ou uso próprio.
* **Tabela de Preços:** Configurar diárias de dias úteis, finais de semana, feriados, hóspedes extras, limpeza e caução.
* **Dados do Imóvel & Vídeo:** Editar título, descrição, capacidades e link do vídeo/drone do YouTube.
* **Fotos por Ambiente:** Adicionar e organizar fotos por categoria (*Fachada, Piscina, Churrasqueira, Quartos, Interior*).
* **Regras & Comodidades:** Adicionar regras com ícones e gerenciar comodidades inclusas.
* **Localização & Estrada:** Atualizar coordenadas, mapa e orientações sobre a estrada de terra.
* **Guia Local:** Cadastrar recomendações de restaurantes, passeios, cachoeiras e mercados.
* **FAQ:** Editar perguntas e respostas frequentes.
* **Backup:** Botão de **Exportar Backup (JSON)** e **Restaurar Backup (JSON)** para salvar todas as alterações feitas.

---

## 📄 Geração de Contrato & Assinatura GOV.BR

* O sistema gera o **Contrato de Locação por Temporada** em PDF no padrão da Lei do Inquilinato (Lei nº 8.245/91).
* O contrato traz dados das partes, datas, discriminação de valores, normas de silêncio e cláusula de validade jurídica para assinatura no portal oficial [assinatura.gov.br](https://assinatura.gov.br) (Lei Federal nº 14.063/2020).

---

## 🧪 Testes Automatizados (Playwright)

Para rodar os testes de ponta a ponta:

```bash
npm install
npm test
```
