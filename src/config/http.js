import axios from "axios";

export const moviesApis = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTA4YjM1NWYyMWJjMzU2YzJmYjEwNmRiMmY2MTQ4OSIsIm5iZiI6MTczODk0MDU5NS43OTEwMDAxLCJzdWIiOiI2N2E2MjBiMzQ5MmIzNzkyODc4NTk4ZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kpDgOq4BjQlGjMPjTfZwuKBWd6BE6HdPwgRds13_VNg`,
		"Content-Type": "application/json;charset=utf-8",
	},
});
