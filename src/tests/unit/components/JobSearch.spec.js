import { shallowMount } from '@vue/test-utils'
import JobSearch from '../../../components/jobs/JobSearch.vue'

describe('JobSearch.vue - sanitizeSearchInput', () => {
    function mountComponent() {
        return shallowMount(JobSearch, {
            props: {
                modelValue: ''
            }
        })
    }

    it('remove os caracteres < e >', () => {
        const wrapper = mountComponent()
        const result = wrapper.vm.sanitizeSearchInput('<script>alert(1)</script>')
        expect(result).toBe('scriptalert(1)/script')
    })

    it('colapsa múltiplos espaços em um só', () => {
        const wrapper = mountComponent()
        const result = wrapper.vm.sanitizeSearchInput('desenvolvedor    front-end')
        expect(result).toBe('desenvolvedor front-end')
    })

    it('remove espaços do início da string', () => {
        const wrapper = mountComponent()
        const result = wrapper.vm.sanitizeSearchInput('   engenheiro')
        expect(result).toBe('engenheiro')
    })

    it('mantém intacto um texto de busca válido', () => {
        const wrapper = mountComponent()
        const result = wrapper.vm.sanitizeSearchInput('Product Designer Pleno')
        expect(result).toBe('Product Designer Pleno')
    })

    it('retorna string vazia quando a entrada é vazia', () => {
        const wrapper = mountComponent()
        const result = wrapper.vm.sanitizeSearchInput('')
        expect(result).toBe('')
    })

    it('emite o valor sanitizado ao digitar no input', async () => {
        const wrapper = mountComponent()
        const input = wrapper.find('input')

        await input.setValue('  <b>Front</b>   end  ')

        const emitted = wrapper.emitted('update:modelValue')
        expect(emitted).toBeTruthy()
        // trimStart() mantém o espaço final de propósito, para não atrapalhar
        // o usuário digitando a próxima palavra (ver comentário no componente)
        expect(emitted[emitted.length - 1][0]).toBe('bFront/b end ')
    })
})