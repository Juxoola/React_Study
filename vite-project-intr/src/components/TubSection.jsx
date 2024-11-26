import Button from "./Button/Button"
export default function TubSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'main'} onTouch={() => onChange('main')}>Главная</Button>
            <Button isActive={active === 'feedback'} onTouch={() => onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}