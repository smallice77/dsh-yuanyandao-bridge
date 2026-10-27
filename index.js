export default {
  async activate(ctx) {
    ctx.logger.info("元衍道枢MCP桥插件已加载，等待后端 127.0.0.1:18080/mcp");
  }
};
