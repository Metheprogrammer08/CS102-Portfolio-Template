type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = 'daviddoforwork@gmail.com'

export const WEB_TITLE = 'Đỗ Như Hải\'s - Portfolio'
export const WEB_DESCRIPTION =
  'A personal website showcasing my work and projects.'
export const FOOTER_COPYRIGHT = '© 2025 Đỗ Như Hải.'
export const FOOTER_LINK = 'https://github.com/metheprogrammer08/'

export const NAME = 'Đỗ Như Hải'
export const JOB_TITLE = 'High School student'
export const DESCRIPTION =
  'I am a passionate designer and developer with a focus on creating beautiful and functional user interfaces. I have experience in design engineering, front-end development, and product design. I love to explore the intersection of design and technology, and I am always looking for new challenges to tackle.'

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4',
    id: 'project2',
  },
  {
    name: "My club's website",
    description: 'A simple website to introduce our informatics club.',
    link: "https://pnit.club/",
    video: "https://th.bing.com/th/id/R.5ce088d9f758a1ae0b3126711af4f19c?rik=mE1wOy8STGkz4g&pid=ImgRaw&r=0",
    id: 'project3'
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: "My First Post",
    description: 'A brief introduction to my blog',
    link: '/blog/my-first-post',
    uid: 'blog-2',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/github',
  },
]
