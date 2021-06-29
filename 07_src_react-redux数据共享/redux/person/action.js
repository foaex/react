import { ADDPERSON } from "../constant"

export function addPerson(personObj) {
	return {
		type:ADDPERSON,
		data:personObj
	}
}