import { readFileSync } from "fs";
import parseJson, {JSONError} from 'parse-json';

export const getLibrariesFromPackageJson = () => {
    const packageJsonPath = require('../../package.json')
    const packageJsonContents = readFileSync(packageJsonPath, 'utf-8');
}