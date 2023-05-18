import Landing from "../../routes/+page.svelte";
import { mock } from "vitest-mock-extended";

describe("Landing Text", () => {
    const mockResponse = {
        data: {
            user: {
                name: "Niklas"
            }
        }
    };

    test("should render landing text", () => {
        // Create a new container for the test
        const host = document.createElement('div');

        // Append the new container in the HTML body
        document.body.appendChild(host);

        // create instance of landing in host
        const instance = new Landing({ target: host, props: mockResponse });

        // Check if host has landing
        expect(instance).toBeTruthy();

        // Test if landing text in host
        expect(host.innerHTML).toContain("Welcome to our landing page!")
    });
})