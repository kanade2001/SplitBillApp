FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

# 必要なツールをインストール
RUN apt-get update && apt-get install -y --no-install-recommends \
  python3 python3-pip \
  git \
  curl && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

# Node.js公式リポジトリを追加
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
# Node.jsとnpmをインストール
RUN apt-get install -y nodejs

# 必要なグローバルツールをインストール
RUN npm install -g eslint prettier

ENV SHELL=/bin/bash
