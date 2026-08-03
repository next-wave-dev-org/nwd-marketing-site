export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceStepSummary {
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  summary: ServiceStepSummary;
  deliverables: ServiceDeliverable[];
}

export interface ServicePageProps {
  heroBadgeTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  steps: ServiceStep[];
}
