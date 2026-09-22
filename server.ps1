# Simple PowerShell Static File Server
# Serves index.html, style.css, app.js, etc. on http://localhost:8080/
$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " Servidor local da Chacara rodando com sucesso!" -ForegroundColor Cyan
    Write-Host " Acesse no seu navegador: http://localhost:$port/" -ForegroundColor Yellow
    Write-Host " Pressione Ctrl+C para encerrar o servidor." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Green
} catch {
    Write-Host "Erro ao iniciar o servidor na porta $port. Verifique se a porta ja esta em uso: $_" -ForegroundColor Red
    exit 1
}

$currentDir = Get-Location

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Resolve requested file path
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }
        
        # Remove leading slash to join path
        $cleanPath = $urlPath.TrimStart("/\").Replace("/", "\")
        $filePath = [System.IO.Path]::Combine($currentDir.Path, $cleanPath)
        
        if (Test-Path $filePath -PathType Leaf) {
            try {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                
                # Content type detection
                if ($filePath.EndsWith(".html")) {
                    $response.ContentType = "text/html; charset=utf-8"
                } elseif ($filePath.EndsWith(".css")) {
                    $response.ContentType = "text/css; charset=utf-8"
                } elseif ($filePath.EndsWith(".js")) {
                    $response.ContentType = "application/javascript; charset=utf-8"
                } elseif ($filePath.EndsWith(".json")) {
                    $response.ContentType = "application/json; charset=utf-8"
                } elseif ($filePath.EndsWith(".png")) {
                    $response.ContentType = "image/png"
                } elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) {
                    $response.ContentType = "image/jpeg"
                } elseif ($filePath.EndsWith(".webp")) {
                    $response.ContentType = "image/webp"
                } elseif ($filePath.EndsWith(".svg")) {
                    $response.ContentType = "image/svg+xml"
                } elseif ($filePath.EndsWith(".pdf")) {
                    $response.ContentType = "application/pdf"
                } else {
                    $response.ContentType = "application/octet-stream"
                }
                
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $response.StatusCode = 500
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("Erro ao ler o arquivo: $_")
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("Arquivo nao encontrado: $urlPath")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "Servidor finalizado: $_"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    Write-Host "Servidor parado."
}
