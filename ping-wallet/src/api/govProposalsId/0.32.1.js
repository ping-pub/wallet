import axios from '../axios'

// 钱包账户情况
const request = async (id) => {
  const res = await axios.get(`/gov/proposals/${id}`)
  const item = res.data
  // 标题 描述
  const {
    title,
    tally_result,
    proposal_status,
    description,
    proposal_id
  } = item.value && item.value.BasicProposal || {}
  item.title = title
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
  item.rate = {
    yes: item.yes,
    no: item.no,
    abstain: item.abstain,
    no_with_veto: item.no_with_veto
  }
  item.proposal_status = proposal_status
  item.id = proposal_id
  return item
}

export default request
