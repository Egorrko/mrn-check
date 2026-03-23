# Создаем папку для ресурсов
mkdir -p pb_assets && cd pb_assets

# Скачиваем основной JSON
curl -s "https://ru.mrrnk.com/pixelb?v=$(date +%s)" -o main_config.json

# Вытаскиваем все URL и скачиваем их
# Предполагаем, что ссылки лежат в полях "url", "image" или "link"
cat main_config.json | jq -r '.. | .url? // .image? // empty' | while read -r url; do
    echo "Downloading: $url"
    curl -O -L "$url"
done