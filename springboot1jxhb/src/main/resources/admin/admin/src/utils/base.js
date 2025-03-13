const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1jxhb/",
            name: "springboot1jxhb",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1jxhb/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园便利平台"
        } 
    }
}
export default base
