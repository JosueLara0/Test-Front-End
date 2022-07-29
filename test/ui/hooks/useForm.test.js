//* libraries
import { renderHook, act } from "@testing-library/react";
//* hooks
import { useForm } from "../../../src/ui/hooks/useForm";

describe("Tests in useForm hook", () => {

    const initialForm = {
        name: 'Josue',
        email: "josue@email.com"
    };

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
        });
    });

    test('should change the form name', () => {
        const newValue = 'Jose';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

});
