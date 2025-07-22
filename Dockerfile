# Используем базовый образ Node.js с явным указанием платформы amd64
FROM --platform=linux/amd64 node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Собираем React-приложение
RUN npm run build

# Устанавливаем serve для раздачи статических файлов
RUN npm install -g serve

# Экспортируем порт
EXPOSE 3000

# Запускаем приложение напрямую, без использования скрипта
CMD ["serve", "-s", "build", "-l", "8080"]
