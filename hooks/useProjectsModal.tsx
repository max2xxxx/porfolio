import {create} from 'zustand';

interface ProjectModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useProjectsModal = create<ProjectModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useProjectsModal;