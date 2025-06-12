import { ApiResponse } from './ApiResponse';
import api from './axios';

export interface HospitalDto {
  id: string;
  name: string;
}

export interface GetHospitalsRequest {
  pageNumber?: number;
  pageSize?: number;
  active?: boolean;
  search?: string;
}

export interface CreateHospitalRequest {
  name: string;
}

export interface UpdateHospitalRequest {
  id: string;
  data: HospitalDto;
}

export const getHospitals = (request?: GetHospitalsRequest) => {
  return api.get<ApiResponse<HospitalDto[]>>('/hospitals', { params: request });
}

export const getHospital = (id: string) => api.get<ApiResponse<HospitalDto>>(`/hospitals/${id}`);

export const createHospital = (data: CreateHospitalRequest) =>
  api.post<ApiResponse<HospitalDto>>('/hospitals', data);

export const updateHospital = (id: string, data: UpdateHospitalRequest) =>
  api.put<ApiResponse<HospitalDto>>(`/hospitals/${id}`, data);

export const deleteHospital = (id: string) =>
  api.delete<ApiResponse<boolean>>(`/hospitals/${id}`);