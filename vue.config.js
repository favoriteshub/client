module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
          @import "@/style/variables/index.scss";
          @import "@/style/mixins/index.scss";
          @import "@/style/extensions/index.scss";
        `
			}
		}
	}
};
