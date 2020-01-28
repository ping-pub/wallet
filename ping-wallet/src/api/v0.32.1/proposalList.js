import http from '../interface'

// 获取治理列表
const proposalList = async () => {
	const res = await http.get('/gov/proposals')
	const result = res.data
	for (const item of result) {
		// 标题 描述
		const {
			title,
			description,
			tally_result,
			proposal_id
		} = item.value && item.value.BasicProposal || {}
		item.title = title
		item.id = proposal_id
		item.description = description && (description.substr(0, 80) + '...')
		// 投票结果比例
		const {
			yes,
			no,
			abstain,
			no_with_veto
		} = tally_result
		const total = Number(yes) + Number(no) + Number(abstain) + Number(no_with_veto)
		item.yes = ((Number(yes) / total) * 100).toFixed(2) + '%'
		item.no = ((Number(no) / total) * 100).toFixed(2) + '%'
		item.abstain = ((Number(abstain) / total) * 100).toFixed(2) + '%'
		item.no_with_veto = ((Number(no_with_veto) / total) * 100).toFixed(2) + '%'
	}

	return result
}

export default proposalList