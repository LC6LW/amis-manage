const  info = {
    "env" : 'local',
    "domain" : '',
}

switch (info.env) {
    // 本地
    case "local": info.domain =  'http://127.0.0.1:9003';
        break;
    // 测试
    case "test":   info.domain =  'http://47.105.173.199:9002';
        break;
    // 正式
    case "prod" :  info.domain = '';
        break;
}

console.log('%cENV：' + ' 😣 ' +  info.env + '😞', 'color:#F56C6C;background-color:LightSkyBlue')

export default info
