export interface Order {
  id: string;
  customer: string;
  value: number;
  openQty: number;
  status: 'Fully' | 'Partially';
  daysOpen: number;
  priorityScore: number;
  assignedAgent: string;
  nextAction: string;
}

export interface Task {
  id: string;
  orderId: string;
  customer: string;
  dueDate: string;
  sla: string;
  assignedAgent: string;
  taskType: string;
  status: string;
  comments: string;
}

export interface Rule {
  id: string;
  name: string;
  description: string;
  weight: number;
  conditions: string;
  enabled: boolean;
}

export interface IntegrationJob {
  id: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  read: boolean;
}
