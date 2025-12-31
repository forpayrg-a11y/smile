
export interface TreatmentCase {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

export interface QuoteForm {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  treatment: string;
}
