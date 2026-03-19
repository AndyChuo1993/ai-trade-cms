import { Lang } from '@/lib/i18n'
import { Check, Minus } from 'lucide-react'

interface ComparisonRow {
  feature: { zh: string; cn: string; en: string }
  leadGen: { zh: string; cn: string; en: string } | boolean
  distributor: { zh: string; cn: string; en: string } | boolean
  outsourcing: { zh: string; cn: string; en: string } | boolean
}

const rows: ComparisonRow[] = [
  {
    feature: { zh: '目標', cn: '目标', en: 'Goal' },
    leadGen: { zh: '找到海外買家並產出合格詢價', cn: '找到海外买家并产出合格询价', en: 'Find overseas buyers and generate qualified inquiries' },
    distributor: { zh: '找到並簽下通路夥伴，建立覆蓋', cn: '找到并签下通路伙伴，建立覆盖', en: 'Recruit channel partners and build market coverage' },
    outsourcing: { zh: '把外銷開發與跟進做成可交付系統', cn: '把外贸开发与跟进做成可交付系统', en: 'Run export sales operations as a deliverable system' },
  },
  {
    feature: { zh: '流程', cn: '流程', en: 'Process' },
    leadGen: { zh: '理想客戶 → 資料 → 訊息 → 跟進節奏 → 回覆分類別', cn: '理想客户 → 资料 → 信息 → 跟进节奏 → 回复分类', en: 'ICP → 決策人資料 → 訊息策略 → 多輪跟進 → 商機推進' },
    distributor: { zh: '市場分層 → 通路地圖 → 潛在合作對象資料 → 合作方案 → 推進簽約', cn: '市场分层 → 通路地图 → 潜在合作对象资料 → 合作方案 → 推进签约', en: 'Market tiers → channel map → shortlist → offer → agreement' },
    outsourcing: { zh: '研究 → 開發 → 跟進 → 資格判斷 → 報價與合作推進', cn: '研究 → 开发 → 跟进 → 资格判断 → 报价与合作推进', en: 'Lists + outreach + follow-ups + qualification + inquiry hand-off' },
  },
  {
    feature: { zh: '交付內容', cn: '交付内容', en: 'Deliverables' },
    leadGen: { zh: '可用的開發資料＋詢價與需求整理', cn: '可用的开发资料＋询价与需求整理', en: 'Usable lists (Excel) + inquiry summaries' },
    distributor: { zh: '可追蹤通路資料＋合作條件框架＋會議', cn: '可追踪通路资料＋合作条件框架＋会议', en: 'Trackable shortlist + term framework + meetings' },
    outsourcing: { zh: '合格詢價持續交付＋可追蹤 pipeline', cn: '合格询价持续交付＋可追踪 pipeline', en: 'Ongoing qualified inquiries + trackable pipeline' },
  },
  {
    feature: { zh: '合約期', cn: '合约期', en: 'Contract Term' },
    leadGen: { zh: '1 年', cn: '1 年', en: '1 Year' },
    distributor: { zh: '1 年', cn: '1 年', en: '1 Year' },
    outsourcing: { zh: '1 年', cn: '1 年', en: '1 Year' },
  },
  {
    feature: { zh: '交付時程', cn: '交付时程', en: 'Timeline' },
    leadGen: { zh: '4–8 週（視市場/產業）', cn: '4–8 周（视市场/产业）', en: '4–8 Weeks (varies by market)' },
    distributor: { zh: '12–18 週（找人＋談條件）', cn: '12–18 周（找人＋谈条件）', en: '12–18 Weeks (sourcing + negotiation)' },
    outsourcing: { zh: '每月交付討論（同步所有開發進度）', cn: '每月交付讨论（同步所有开发进度）', en: 'Monthly Delivery Reviews' },
  },
]

export default function ServiceComparison({ lang }: { lang: Lang }) {
  const renderCell = (cell: { zh: string; cn: string; en: string } | boolean) => {
    if (typeof cell === 'boolean') {
      return cell ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    if (lang === 'en') return cell.en
    if (lang === 'cn') return cell.cn
    return cell.zh
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-bold text-gray-900 w-1/4">
              {lang === 'en' ? 'Feature' : (lang === 'cn' ? '比较项目' : '比較專案')}
            </th>
            <th className="p-4 font-bold text-blue-900 bg-blue-50 w-1/4 text-center border-t-4 border-t-blue-600">
              {lang === 'en' ? 'Export Lead Gen' : (lang === 'cn' ? '外贸客户开发' : '外銷客戶開發')}
            </th>
            <th className="p-4 font-bold text-green-900 bg-green-50 w-1/4 text-center border-t-4 border-t-green-600">
              {lang === 'en' ? 'Distributor Dev' : (lang === 'cn' ? '经销商开发' : '經銷商開發')}
            </th>
            <th className="p-4 font-bold text-indigo-900 bg-indigo-50 w-1/4 text-center border-t-4 border-t-indigo-600">
              {lang === 'en' ? 'Export Sales Outsourcing' : (lang === 'cn' ? '外贸业务外包' : '外銷業務外包')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-gray-900">
                {lang === 'en' ? row.feature.en : (lang === 'cn' ? row.feature.cn : row.feature.zh)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-blue-50/30">
                {renderCell(row.leadGen)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-green-50/30">
                {renderCell(row.distributor)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-indigo-50/30">
                {renderCell(row.outsourcing)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
