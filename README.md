# 元衍道枢 MCP 接入包 DSH 线上Bundle
> DSH组合包插件，线上直接安装：`github:smallice77/dsh-yuanyandao-bridge`

## 暴露MCP工具
| 对外工具名 | 底层MCP名称 | 用途 |
| ---- | ---- | ---- |
| invoke | mcp_yuanyandao_invoke | 问答 / 沙盘推演 / 训练配置 / 交付文档 / 词库维护 |
| reload | mcp_yuanyandao_reload | 热重载词库与向量索引 |
| status | mcp_yuanyandao_status | 查看知识库、Ollama、审计链状态 |

## 使用前置
1. 启动元衍道枢后端服务
```bash
python -m yuanyandao serve --port 18080

