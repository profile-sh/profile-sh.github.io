const build_destination= './'+process.env.GHWFL_BUILD_DESTINATION_DIR;
console.log("build dest: ",build_destination);
module.exports= {
    content: [build_destination+"/**/*.html",build_destination+"/**/*.js"],
    css: [build_destination+"/assets/**/*.css"],
    output: build_destination+"/assets/css/",
    skippedContentGlobs: [build_destination+"/assets/**/*.html","node_modules/**", "components/**"],
    safelist: {
        deep: [/dropdown-menu$/]
    },
};
