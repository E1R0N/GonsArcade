export const state = () => ({
    id: "",
    name: "",
    about: ""
})

export const mutations = {
    setId: (state, data) => {
        state.id = data
    },
    setName: (state, data) => {
        state.name = data
    },
    setAbout: (state, data) => {
        state.about = data
    }
}