export interface Address {
  street: string;
  neighborhood: string;
  city: string;
}

export interface SedeInfo {
  name: string;
  address: Address;
  phone: string;
}
