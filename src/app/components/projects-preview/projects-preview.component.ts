import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.scss'
})
export class ProjectsPreviewComponent implements AfterViewInit {
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-featured e-commerce platform built with Angular and Node.js. Features real-time inventory, AI-powered recommendations, and seamless checkout.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#7c3aed'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts, custom widgets, and automated reporting. Built for enterprise-scale data processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Angular', 'D3.js', 'WebSockets', 'PostgreSQL'],
      color: '#06b6d4'
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Feature-rich social platform with real-time messaging, story sharing, and content creation tools. Optimized for performance and engagement.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Angular', 'Firebase', 'RxJS', 'PWA'],
      color: '#ec4899'
    },
    {
      id: 4,
      title: 'AI Content Platform',
      description: 'Next-generation content creation platform powered by AI. Includes automated writing, image generation, and smart content optimization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['Angular', 'OpenAI', 'Python', 'Redis'],
      color: '#f59e0b'
    }
  ];

  ngAfterViewInit() {
    this.initScrollReveal();
    this.initTiltEffect();
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

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  private initTiltEffect() {
    this.projectCards.forEach(cardRef => {
      const card = cardRef.nativeElement;
      
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
}
