import { Container } from './style';

export function NewIngredient({ isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
      </button>
    </Container>
  );
}