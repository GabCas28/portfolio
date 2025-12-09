import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  type: 'work' | 'project' | 'education';
}

interface DetailedProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  color: string;
  year: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  scrollY = 0;
  expandedProject: number | null = null;

  timeline: TimelineItem[] = [
    {
      id: 1,
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading the frontend architecture for enterprise-scale applications. Implementing micro-frontends and optimizing performance across the platform.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Jest'],
      type: 'work'
    },
    {
      id: 2,
      year: '2023',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client-facing applications. Improved overall performance by 40% through code optimization and lazy loading.',
      technologies: ['Angular', 'React', 'Node.js', 'GraphQL'],
      type: 'work'
    },
    {
      id: 3,
      year: '2022',
      title: 'AI Content Platform',
      company: 'Personal Project',
      description: 'Built a next-generation content creation platform powered by AI with automated writing and image generation capabilities.',
      technologies: ['Angular', 'OpenAI API', 'Python', 'Redis'],
      type: 'project'
    },
    {
      id: 4,
      year: '2021',
      title: 'Junior Developer',
      company: 'StartupXYZ',
      description: 'Started my professional journey building responsive web applications and learning enterprise-level development practices.',
      technologies: ['JavaScript', 'Angular', 'CSS', 'Git'],
      type: 'work'
    },
    {
      id: 5,
      year: '2020',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, specializing in web technologies and software engineering. Completed thesis on Progressive Web Applications.',
      technologies: ['Algorithms', 'Data Structures', 'Web Dev', 'UX Design'],
      type: 'education'
    }
  ];

  detailedProjects: DetailedProject[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Development',
      description: 'A modern, full-featured e-commerce platform',
      longDescription: 'Designed and developed a comprehensive e-commerce solution featuring real-time inventory management, AI-powered product recommendations, multi-currency support, and a seamless checkout experience. The platform handles thousands of daily transactions with 99.9% uptime.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
      technologies: ['Angular 17', 'Node.js', 'MongoDB', 'Stripe API', 'Redis', 'Docker'],
      features: ['Real-time inventory', 'AI recommendations', 'Multi-currency', 'Analytics dashboard'],
      color: '#7c3aed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      subtitle: 'Data Visualization',
      description: 'Enterprise-grade real-time analytics',
      longDescription: 'Built a powerful analytics dashboard for enterprise clients featuring interactive charts, custom widgets, automated reporting, and real-time data streaming. Processes over 1 million data points daily with sub-second latency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      technologies: ['Angular', 'D3.js', 'WebSockets', 'PostgreSQL', 'Python', 'AWS'],
      features: ['Real-time streaming', 'Custom widgets', 'Export to PDF/Excel', 'Role-based access'],
      color: '#06b6d4',
      year: '2023'
    },
    {
      id: 3,
      title: 'Social Media App',
      subtitle: 'Mobile-First PWA',
      description: 'Feature-rich social platform',
      longDescription: 'Created a progressive web application for social networking with real-time messaging, story sharing, content creation tools, and engagement analytics. Optimized for mobile devices with offline capabilities.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
      technologies: ['Angular', 'Firebase', 'RxJS', 'PWA', 'Push Notifications', 'IndexedDB'],
      features: ['Real-time chat', 'Stories', 'Content editor', 'Offline mode'],
      color: '#ec4899',
      year: '2023'
    },
    {
      id: 4,
      title: 'AI Content Platform',
      subtitle: 'Machine Learning Integration',
      description: 'Next-generation content creation',
      longDescription: 'Developed an innovative platform that leverages artificial intelligence for content creation. Features include automated writing assistance, image generation, SEO optimization suggestions, and smart content scheduling.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
      technologies: ['Angular', 'OpenAI API', 'Python', 'FastAPI', 'Redis', 'Celery'],
      features: ['AI writing', 'Image generation', 'SEO tools', 'Scheduling'],
      color: '#f59e0b',
      year: '2024'
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  private initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }

  toggleProject(id: number) {
    this.expandedProject = this.expandedProject === id ? null : id;
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'work': return 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z';
      case 'project': return 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4';
      case 'education': return 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z';
      default: return '';
    }
  }
}
