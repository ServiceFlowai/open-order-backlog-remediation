import { Order, Task, Rule, IntegrationJob, Notification } from './models';

export const orders: Order[] = [
  {
    id: 'ORD001',
    customer: 'Customer A',
    value: 50000,
    openQty: 10,
    status: 'Partially',
    daysOpen: 5,
    priorityScore: 85,
    assignedAgent: 'Agent 1',
    nextAction: 'Review'
  },
  // Add more mock orders
];

export const tasks: Task[] = [
  {
    id: 'TASK001',
    orderId: 'ORD001',
    customer: 'Customer A',
    dueDate: '2023-12-01',
    sla: 'High',
    assignedAgent: 'Agent 1',
    taskType: 'Review',
    status: 'New',
    comments: 'Check order details'
  },
  // Add more mock tasks
];

export const rules: Rule[] = [
  {
    id: 'RULE001',
    name: 'High Value Priority',
    description: 'Increase priority for high value orders',
    weight: 30,
    conditions: 'value > 100000',
    enabled: true
  },
  // Add more mock rules
];

export const integrationJobs: IntegrationJob[] = [
  {
    id: 'JOB001',
    type: 'Create Delivery',
    status: 'Completed',
    createdAt: '2023-11-01T10:00:00Z',
    updatedAt: '2023-11-01T10:05:00Z'
  },
  // Add more mock jobs
];

export const notifications: Notification[] = [
  {
    id: 'NOTIF001',
    message: 'Order ORD001 is overdue',
    type: 'warning',
    read: false
  },
  // Add more mock notifications
];
