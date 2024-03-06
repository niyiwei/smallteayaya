const jwt = require('jsonwebtoken');

const JWT = {
    // 模拟用户登录，生成 JWT
    generateToken: function (secretKey, user) {
        // 创建 JWT
        const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' }); // 设置过期时间为1小时
        return token;
    },

    verifyToken: function (token, secretKey) {
        try {
            // 验证 JWT
            const decoded = jwt.verify(token, secretKey);
            return decoded.user;
        } catch (error) {
            // 验证失败，返回错误信息
            console.error('JWT 验证失败:', error.message);
            return null;
        }
    },
};
export default JWT;