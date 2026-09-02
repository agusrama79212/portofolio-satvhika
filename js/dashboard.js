/* ==========================================================================
   INTERACTIVE S / ONE DASHBOARD MOCKUP
   Satvhika — Digital Product & SaaS Platform
   ========================================================================== */

const DASHBOARD_DATA = {
  '30d': {
    revenue: '$84.2K',
    users: '12,480',
    growth: '+28.4%',
    bars: [
      { height: '42%', value: '$11.8K' },
      { height: '78%', value: '$21.4K' },
      { height: '58%', value: '$16.2K' },
      { height: '72%', value: '$19.8K' },
      { height: '90%', value: '$24.9K' },
      { height: '100%', value: '$28.4K' }
    ]
  },
  '7d': {
    revenue: '$21.6K',
    users: '3,820',
    growth: '+14.2%',
    bars: [
      { height: '35%', value: '$2.8K' },
      { height: '55%', value: '$4.1K' },
      { height: '45%', value: '$3.5K' },
      { height: '80%', value: '$6.2K' },
      { height: '65%', value: '$5.1K' },
      { height: '95%', value: '$7.4K' }
    ]
  },
  '90d': {
    revenue: '$248.5K',
    users: '36,120',
    growth: '+42.1%',
    bars: [
      { height: '50%', value: '$32.0K' },
      { height: '65%', value: '$41.2K' },
      { height: '75%', value: '$48.5K' },
      { height: '82%', value: '$53.1K' },
      { height: '92%', value: '$59.4K' },
      { height: '100%', value: '$64.3K' }
    ]
  }
};

const TAB_TITLES = {
  overview: 'Good morning, Maya. (S / ONE System)',
  pos: 'Point of Sales (POS) Real-time Cashier Stream',
  ecommerce: 'E-Commerce Storefront & Payment Gateway',
  ai: 'AI Agent & Customer Automation Hub'
};

function initDashboard() {
  const statRevenue = document.getElementById('stat-revenue');
  const statUsers = document.getElementById('stat-users');
  const statGrowth = document.getElementById('stat-growth');
  const greetingTitle = document.getElementById('dash-greeting-text');
  const chartBars = document.querySelectorAll('.chart-bar-group');
  const filterBtns = document.querySelectorAll('.chart-filter-btn');
  const menuItems = document.querySelectorAll('.dash-menu-item');

  function updateChart(period) {
    const data = DASHBOARD_DATA[period];
    if (!data) return;

    if (statRevenue) statRevenue.textContent = data.revenue;
    if (statUsers) statUsers.textContent = data.users;
    if (statGrowth) statGrowth.textContent = data.growth;

    chartBars.forEach((group, index) => {
      const bar = group.querySelector('.chart-bar');
      const tooltip = group.querySelector('.chart-tooltip');
      if (bar && data.bars[index]) {
        bar.style.height = data.bars[index].height;
      }
      if (tooltip && data.bars[index]) {
        tooltip.textContent = data.bars[index].value;
      }
    });
  }

  // Filter button event listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const period = btn.getAttribute('data-period') || '30d';
      updateChart(period);
    });
  });

  // Menu tab event listeners
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItems.forEach(m => m.classList.remove('active'));
      item.classList.add('active');
      const tab = item.getAttribute('data-tab');
      if (greetingTitle && TAB_TITLES[tab]) {
        greetingTitle.textContent = TAB_TITLES[tab];
      }
    });
  });

  // Initial load
  updateChart('30d');
}

document.addEventListener('DOMContentLoaded', initDashboard);
