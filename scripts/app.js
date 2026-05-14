const STACKS = [
  {
    id: 'fullstack', label: 'Full Stack', accent: '#a78bfa',
    techs: [
      { name: 'Node.js' }, { name: 'Laravel' }, { name: 'React' },
      { name: 'Vue.js' }, { name: 'MySQL' }, { name: 'MongoDB' },
      { name: 'REST API' }, { name: 'Docker' }, { name: 'Git' },
    ]
  },
  {
    id: 'backend', label: 'Backend', accent: '#34d399',
    techs: [
      { name: 'Node.js' }, { name: 'Laravel' }, { name: 'Express.js' },
      { name: 'PHP' }, { name: 'MySQL' }, { name: 'MongoDB' },
      { name: 'REST API' }, { name: 'JWT' }, { name: 'Redis' },
    ]
  },
  {
    id: 'frontend', label: 'Frontend', accent: '#60a5fa',
    techs: [
      { name: 'React' }, { name: 'Vue.js' }, { name: 'JavaScript' },
      { name: 'HTML5' }, { name: 'CSS3' }, { name: 'Tailwind' },
      { name: 'Vite' }, { name: 'Axios' }, { name: 'Figma' },
    ]
  },
  {
    id: 'devops', label: 'DevOps', accent: '#fb923c',
    techs: [
      { name: 'Docker' }, { name: 'Git' }, { name: 'GitHub Actions' },
      { name: 'Linux' }, { name: 'Nginx' }, { name: 'CI/CD' },
      { name: 'SSH' }, { name: 'Bash' }, { name: 'PM2' },
    ]
  },
  {
    id: 'mobile', label: 'Mobile', accent: '#f472b6',
    techs: [
      { name: 'Android Studio' }, { name: 'Java' }, { name: 'Kotlin' },
      { name: 'XML Layouts' }, { name: 'Firebase' }, { name: 'REST API' },
      { name: 'SQLite' }, { name: 'Material UI' }, { name: 'Gradle' },
    ]
  },
];

const STACK_BANNERS = {
  fullstack: [1], backend: [2], frontend: [3], devops: [4], mobile: [5]
};

new Vue({
  el: '#app',
  data: {
    currBanner: 1,
    nextBanner: null,
    activeStackId: 'fullstack',
    stacks: STACKS,
    autoRotate: null,
    stackOrder: ['fullstack', 'backend', 'frontend', 'devops', 'mobile'],
    stackIndex: 0,
    skills: [
      "MERN Stack", "Laravel", "Vue.js", "Android Studio", "Java",
      "JavaScript", "PHP", "Python", "DSA", "Git", "MySQL",
      "React", "MongoDB", "Express", "Node.js", "Docker", "Redis"
    ],
    projects: projects,
    TYPE_ANDROID: TYPE_ANDROID,
    TYPE_WEB: TYPE_WEB,
  },
  computed: {
    activeStack() {
      return this.stacks.find(s => s.id === this.activeStackId) || this.stacks[0];
    }
  },
  mounted() {
    this.startAutoRotate();
    this.setupScrollObserver();
  },
  beforeDestroy() { clearInterval(this.autoRotate); },
  methods: {
    selectStack(id) {
      if (id === this.activeStackId) return;
      this.activeStackId = id;
      this.changeBannerForStack(id);
      clearInterval(this.autoRotate);
      this.stackIndex = this.stackOrder.indexOf(id);
      this.startAutoRotate();
    },
    startAutoRotate() {
      this.autoRotate = setInterval(() => {
        this.stackIndex = (this.stackIndex + 1) % this.stackOrder.length;
        const nextId = this.stackOrder[this.stackIndex];
        this.activeStackId = nextId;
        this.changeBannerForStack(nextId);
      }, 5000);
    },
    changeBannerForStack(id) {
      const banners = STACK_BANNERS[id] || [1];
      let b = banners[Math.floor(Math.random() * banners.length)];
      if (b === this.currBanner) b = b === 11 ? 1 : b + 1;
      const img = new Image();
      img.src = `images/hero-banner/${b}.jpg`;
      img.onload = () => {
        this.nextBanner = b;
        setTimeout(() => { this.currBanner = b; this.nextBanner = null; }, 900);
      };
    },
    setupScrollObserver() {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.3 });
      document.querySelectorAll('.about-item').forEach(el => obs.observe(el));
    }
  }
});