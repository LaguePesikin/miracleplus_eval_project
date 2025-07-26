import React from 'react';
import { useNavigate } from 'react-router-dom';
import { leaderboardData } from '../datasets/palindromeLeaderboard';


export default function PalindromeSearchPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
      <button className="mb-4 text-blue-600" onClick={() => navigate(-1)}>
        返回
      </button>
      
      {/* New Content Start */}
      <h3 className="text-xl font-semibold mb-2">自动化大海捞针任务</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-1">
        <li>subtrack 1: 寻找特定长度的回文子串</li>
        <li>subtrack 2: 寻找大写字母组成的英文单词</li>
        <li>subtrack 3: 寻找 <code>m*n</code></li>
        <li>subtrack 4: 寻找指定正则模式</li>
        <li>subtrack 5: 寻找最长公共子序列</li>
        <li>subtrack 6: 删除字符以还原回文结构</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Automated Needle-in-a-Haystack Tasks</h3>
      <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-1">
        <li>Subtrack 1: Find palindromic substrings of specific lengths</li>
        <li>Subtrack 2: Find English words composed of uppercase letters</li>
        <li>Subtrack 3: Find <code>m*n</code></li>
        <li>Subtrack 4: Find specified regular expression patterns</li>
        <li>Subtrack 5: Find the longest common subsequence</li>
        <li>Subtrack 6: Delete characters to restore palindromic structure</li>
      </ul>
      {/* New Content End */}

      <div className="overflow-x-auto mt-8">
        <h3 className="text-xl font-semibold mb-2">排行榜（微观/宏观平均）</h3>
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">排名</th>
              <th className="px-4 py-2 text-left">模型</th>
              <th className="px-4 py-2 text-left">微观成功率</th>
              <th className="px-4 py-2 text-left">微观正确率</th>
              <th className="px-4 py-2 text-left">宏观成功率</th>
              <th className="px-4 py-2 text-left">宏观正确率</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData
              .map((item, idx, arr) => ({ ...item, rank: idx + 1 }))
              .sort((a, b) => b.microCorrect - a.microCorrect) // 按微观正确率降序
              .map((item, idx) => (
                <tr key={item.model} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2 font-medium">{item.model}</td>
                  <td className="px-4 py-2">{item.microSuccess.toFixed(2)}%</td>
                  <td className="px-4 py-2">{item.microCorrect.toFixed(2)}%</td>
                  <td className="px-4 py-2">{item.macroSuccess.toFixed(2)}%</td>
                  <td className="px-4 py-2">{item.macroCorrect.toFixed(2)}%</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}