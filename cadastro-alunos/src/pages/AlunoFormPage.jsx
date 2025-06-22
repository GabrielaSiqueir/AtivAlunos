import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createAluno, updateAluno } from '../api/alunoApi';
import AlunoForm from '../components/AlunoForm';

const AlunoFormPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  const handleSubmit = async (aluno) => {
    console.log('Dados recebidos no handleSubmit:', aluno);
    try {
      if (id) {
        console.log(`Atualizando aluno com id ${id}...`);
        await updateAluno(id, aluno);
      } else {
        console.log('Criando novo aluno...');
        await createAluno(aluno);
      }
      console.log('Salvo com sucesso! Redirecionando...');
      alert('Aluno salvo com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar aluno:', error);
      alert('Erro ao salvar aluno. Veja o console para detalhes.');
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Aluno' : 'Cadastrar Novo Aluno'}</h2>
      <AlunoForm onSubmit={handleSubmit} initialData={state} />
    </div>
  );
};

export default AlunoFormPage;
