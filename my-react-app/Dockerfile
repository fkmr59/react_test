# ベースイメージ
FROM node:20

# 作業ディレクトリ
WORKDIR /app

# package.json と lock ファイルだけ先にコピー（キャッシュ効かせる）
COPY package*.json ./

# パッケージインストール
RUN npm install

# ソースコードコピー
COPY . .

# ポート指定
EXPOSE 3000

# 開発用サーバ起動（ホットリロード）
CMD ["npm", "start"]
