// 根据版本对应的接口和数据处理
import v0327 from './v0.32.7/index.js'
import v0321 from './v0.32.1/index.js'

import store from '../../store'  

const versions = {
	'0.32.7': v0327,
	'0.32.1': v0321
}

const api = (ver) => {
	const version = ver || store.state.currentChain.version
	return versions[version]
}

export default api
