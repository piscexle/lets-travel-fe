export interface ParameterPost {
  fullName: string;
  avatar: string;
  companyName: string;
  position: string;
  phoneNumber: string;
  email: string;
  primaryColor: string;
  passCode: string;
  items: { icon: string; title: string; value: string }[];
}

export interface ParameterPut extends ParameterPost {
  id: string;
}

export type ItemContact = {
  fullName: string;
  avatar: string;
  companyName: string;
  position: string;
  phoneNumber: string;
  email: string;
  primaryColor: string;
  passCode: string;
  items: { icon: string; title: string; value: string }[];
};

export interface LinkTreeState {
  getDetailContact: {
    data: ItemContact;
    error: string;
    load: boolean;
  };
}
