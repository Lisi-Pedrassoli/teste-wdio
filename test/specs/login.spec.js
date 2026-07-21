import loginPage from "../pageobjects/login.page"

describe('Funcionalidade login', () => {

    it('Deve fazer login com sucesso', async () => {
        await loginPage.abrirMenu()
        await loginPage.preencherLogin()
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    })

    it('Deve falhar ao fazer login com email inválido', async () => {
        await loginPage.abrirMenu()
        await $('~input-email').setValue('teste@teste')
        await $('~input-password').setValue('senha@123')
        await $('~button-LOGIN').click()

        const mensagem = await $('//android.widget.TextView[@text="Please enter a valid email address"]')
        await expect(mensagem).toBeDisplayed()
    })

})