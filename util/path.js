const path = require('path');

// module.exports = path.dirname(process.mainModule.filename); deprecated
module.exports = path.dirname(require.main.filename);

// main 모듈인 app.js의 디렉토리 주소를 export로 반환한다. path 정보를 담은 String이 들어 있겠지?