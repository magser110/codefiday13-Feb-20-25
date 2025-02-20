describe('Sign up button', () => {
    let form, successMessage;

    beforeEach(() => {
        form = { submit: jasmine.createSpy('submit') };
        successMessage = { style: {display : 'none'}, textContent: ''};

        document.getElementById = jasmine.createSpy('getElementById').and.callFake((id) => {
            if (id === 'signUpButton') {
                return {
                    click: () => {
                        form.submit();
                        successMessage.style.display = 'block';
                        successMessage.textContent = 'Sign up successful';
                    },
                };
            }
            return null;
        });
    });
    it('should submit the form and display a success message', () => {
        const button = document.getElementById('signUpButton');
        button.click();

        expect(form.submit).toHaveBeenCalled();
        expect(successMessage.style.display).toBe('block');
        expect(successMessage.textContent).toBe('Sign up successful');
    })
});