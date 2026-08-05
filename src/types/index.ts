export type WorkOrderStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface WorkOrder {
  id: string;
  title: string;
  description: string;
  status: WorkOrderStatus;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  createdAt: string;
}
