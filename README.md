# 元衍道枢 MCP 接入包（DSH 本地 Bundle）

把工作区里的元衍道枢 V7.0 以 MCP stdio 方式挂到 DeepSeek Harness，
暴露三个工具：

| 工具 | 实际名称 | 作用 |
| --- | --- | --- |
| invoke | `mcp__yuanyandao__invoke` | 问答 / 沙盘推演 / 训练配置 / 交付文档 / 词库维护 |
| reload | `mcp__yuanyandao__reload` | 热重载词库与向量索引 |
| status | `mcp__yuanyandao__status` | 查看知识库、Ollama、审计链状态 |

## 连接参数

- 命令：`C:/Users/zxd79/AppData/Local/Programs/Python/Python310/python.exe`
- 参数：`-m yuanyandao mcp`
- 工作目录：`C:/Users/zxd79/Documents/deepseek-harness/default-workspace`
- 环境：`YYDS_MCP_LEVEL=4`、`YYDS_MCP_TRUSTED=1`
- 工具调用超时：180 秒（首次问答需加载本地模型）

## 权限说明

`YYDS_MCP_TRUSTED=1` 时，MCP 进程启动会用本地 `permission.key_secret`
就地签发一枚 L4 密钥（30 天有效），因此智能体无需传密钥即可调用全部能力。
密钥只存在于该进程内，不落盘。

若只希望开放到沙盘（L2）或训练配置（L3），把 `cordis.patch.yml` 里的
`YYDS_MCP_LEVEL` 改为 `2`/`3` 后重载插件即可；`reload` 仍会因权限不足而拒绝。

## 卸载

在 DSH 插件管理中移除 `@local/yuanyandao-mcp`，或在 `plugin_manager` 中执行
`remove_bundle`。卸载不会删除工作区里的元衍道枢工程。
