import express from "express";
import { Volunteer } from "../models/Volunteer.js";
import {Donation} from "../models/Donation.js";
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const router = express.Router();