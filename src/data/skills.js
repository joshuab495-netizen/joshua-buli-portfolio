import {
  SiDotnet,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiN8N,
  SiGithubcopilot,
  SiClaude,
  SiGooglegemini,
  SiPerplexity,
} from 'react-icons/si'
import {
  TbBrandCSharp,
  TbLayoutGrid,
  TbApi,
  TbAppWindow,
  TbRefresh,
  TbDatabase,
  TbSql,
  TbTable,
  TbBolt,
  TbWorld,
  TbPlug,
  TbCode,
  TbFileReport,
  TbReportAnalytics,
  TbLayoutKanban,
  TbChecklist,
} from 'react-icons/tb'

// Fallback icons used where no exact Simple Icons brand match exists (per project spec,
// fallbacks are drawn only from react-icons/tb or react-icons/fa):
// ASP.NET Core MVC, ASP.NET Core Web API, WinForms, AJAX, SQL Server, Dapper ORM,
// Database Design, Query Optimization, REST APIs, Refit, Stored Procedures/Views,
// RDLC, Crystal Reports, Kanban, UAT.

export const SKILL_GROUPS = [
  {
    name: 'Core Technologies',
    items: [
      { label: 'C# / .NET', Icons: [TbBrandCSharp, SiDotnet] },
      { label: 'ASP.NET Core MVC', Icons: [TbLayoutGrid], fallback: true },
      { label: 'ASP.NET Core Web API', Icons: [TbApi], fallback: true },
      { label: 'n8n', Icons: [SiN8N] },
      { label: 'WinForms', Icons: [TbAppWindow], fallback: true },
      { label: 'HTML5', Icons: [SiHtml5] },
      { label: 'CSS3', Icons: [SiCss] },
      { label: 'JavaScript', Icons: [SiJavascript] },
      { label: 'Bootstrap', Icons: [SiBootstrap] },
      { label: 'jQuery', Icons: [SiJquery] },
      { label: 'AJAX', Icons: [TbRefresh], fallback: true },
      { label: 'PHP', Icons: [SiPhp] },
    ],
  },
  {
    name: 'Data & Integration',
    items: [
      { label: 'SQL Server', Icons: [TbDatabase], fallback: true },
      { label: 'MySQL', Icons: [SiMysql] },
      { label: 'Dapper ORM', Icons: [TbSql], fallback: true },
      { label: 'Database Design', Icons: [TbTable], fallback: true },
      { label: 'Query Optimization', Icons: [TbBolt], fallback: true },
      { label: 'REST APIs', Icons: [TbWorld], fallback: true },
      { label: 'Refit', Icons: [TbPlug], fallback: true },
      { label: 'Stored Procedures / Views', Icons: [TbCode], fallback: true },
    ],
  },
  {
    name: 'Tools & Reporting',
    items: [
      { label: 'Git', Icons: [SiGit] },
      { label: 'GitHub', Icons: [SiGithub] },
      { label: 'Postman', Icons: [SiPostman] },
      { label: 'Docker', Icons: [SiDocker] },
      { label: 'RDLC', Icons: [TbFileReport], fallback: true },
      { label: 'Crystal Reports', Icons: [TbReportAnalytics], fallback: true },
    ],
  },
  {
    name: 'AI Development',
    items: [
      { label: 'GitHub Copilot', Icons: [SiGithubcopilot] },
      { label: 'Claude', Icons: [SiClaude] },
      { label: 'Gemini', Icons: [SiGooglegemini] },
      { label: 'Perplexity AI', Icons: [SiPerplexity] },
    ],
  },
  {
    name: 'Methodologies',
    items: [
      { label: 'Kanban', Icons: [TbLayoutKanban], fallback: true },
      { label: 'UAT (User Acceptance Testing)', Icons: [TbChecklist], fallback: true },
    ],
  },
]

export const ADDITIONAL_SKILLS = [
  'Software Architecture',
  'Debugging',
  'Troubleshooting',
  'Reporting Systems',
  'Data Analysis',
  'Technical Support',
  'System Integration',
]
