const Moment = {
    showTime: function () {
        // 引入 Moment.js
        const moment = require('moment');

        // 获取当前时间
        const currentTime = moment();

        // 格式化当前时间
        const formattedTime = currentTime.format('YYYY-MM-DD HH:mm:ss');

        // 打印格式化后的时间
        console.log('当前时间：', formattedTime);
    }
};
export default Moment;