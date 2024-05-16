export const checkError = (error, name) => {
  const errors = {
    'There are more than 500 kb files': {
      title: 'Не удалось сформировать файл "Total.xml".',
      text: 'Превышен допустимый размер файла - 500 Кб.',
    },
    'Invalid XML file with name': {
      title: 'Не удалось обработать файл.',
      text: `Структура файла ${name} не соответствует XSD схеме`,
    },
    notValidType: {
      title: 'Не удалось обработать файл.',
      text: `Некорректный формат файла ${name}.
      Поддерживаемый формат файла для обработки - xml.
      `,
    },
    notFoundXSD: {
      title: 'Не удалось запустить обработку файлов.',
      text: `в каталоге отсутствует .xsd`,
    },
    tooManyXSD: {
      title: 'Не удалось запустить обработку файлов.',
      text: `Превышено максимальное количество файлов .xsd
        Допустимое количество - 1. Обнаружено - ${name}`,
      helper: 'Удалите лишние файлы',
    },
    tooManyXML: {
      title: 'Невозможно запустить обработку файлов.',
      text: `Превышено максимальное количество файлов .xml.
      Допустимое количество - 10. Обнаружено - 12.`,
      helper: 'Удалите лишние файлы',
    },
  }
  return errors[error]
}
