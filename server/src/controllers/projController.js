import { createProjSevice, 
        getProjByIdSevice, 
        getAllProjService, 
        updateProjSevice, 
        deleteProjSevice } from "../models/projModel.js";

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    })
};
export const createProj = async(req, res, next) => {
    const {pname, stages} = req.body;
    try {
        const newProj = await createProjSevice(pname, stages);
        handleResponse(res, 201, "Project created", newProj);
    } catch (err){
        next(err);
    }
};
export const getAllProj = async(req, res, next) => {
    try {
        const Projs = await getAllProjService();
        handleResponse(res, 200, "Project retrieved", Projs);
    } catch (err){
        next(err);
    }
};
export const getProjById = async(req, res, next) => {
    try {
        const Proj = await getProjByIdSevice(req.params.id);
        if(!Proj) return handleResponse(res, 404, "Project not found");
        handleResponse(res, 200, "Project retrieved", Proj);
    } catch (err){
        next(err);
    }
};
export const updateProj = async(req, res, next) => {
    const {pname, stages} = req.body;
    try {
        const updatedProj = await updateProjSevice(req.params.id, pname, stages);
        if(!updatedProj) return handleResponse(res, 404, "Project not found");
        handleResponse(res, 200, "Project updated", updatedProj);
    } catch (err){
        next(err);
    }
};
export const deleteProj = async(req, res, next) => {
    try {
        const deletedProj = await deleteProjSevice(req.params.id);
        if(!deletedProj) return handleResponse(res, 404, "Project not found")
        handleResponse(res, 200, "Project deleted", deletedProj)
    } catch (err){
        next(err);
    }
};