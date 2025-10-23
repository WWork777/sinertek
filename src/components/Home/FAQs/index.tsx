import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:cpu-fill" className="text-2xl text-primary " />
                            Вопросы и ответы
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Всё о разработке прикладного оборудования
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            Ответы на часто задаваемые вопросы о процессе разработки промышленного и научного оборудования
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Какие задачи вы решаете?</AccordionTrigger>
                                    <AccordionContent>
                                        Мы разрабатываем прикладное оборудование полного цикла: от инженерных расчетов и 3D-моделирования до изготовления опытных образцов и передачи в серийное производство. Работаем с механикой, электроникой, ПО и производством корпусов. Специализируемся на измерительном и испытательном оборудовании по ГОСТ.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Какие технологии производства вы используете?</AccordionTrigger>
                                    <AccordionContent>
                                        ЧПУ-фрезеровка металла, холодное литье пластиковых корпусов, литье силикона и различных смол, разработка и монтаж печатных плат, программирование микроконтроллеров. Имеем собственное оборудование для прототипирования и малых серий.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Сколько времени занимает разработка?</AccordionTrigger>
                                    <AccordionContent>
                                        Зависит от сложности: от нескольких недель для простых устройств до 6-12 месяцев для комплексных систем с механикой, электроникой и ПО. Работаем поэтапно с регулярными согласованиями. Предоставляем детальный план после анализа технического задания.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. Предоставляете ли документацию для серийного производства?</AccordionTrigger>
                                    <AccordionContent>
                                        Да, подготавливаем полный пакет: производственные чертежи, спецификации, технологическую документацию, инструкции по сборке и испытаниям. Помогаем с передачей в серийное производство и обучением персонала предприятий-изготовителей.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
