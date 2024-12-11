FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

RUN apt-get update && apt-get install -y --no-install-recommends \
  python3 python3-pip \
  git \
  nodejs npm && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npm install -g eslint prettier

# Postman
# RUN mkdir -p ~/.vscode-server/extensions && \
#   chmod 777 ~/.vscode-server/extensions

ENV SHELL=/bin/bash