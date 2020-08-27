using System.Collections.Generic;
using System.Threading.Tasks;
using FreeChat.API.Models;

namespace FreeChat.API.Data {
    public interface IChattingRepository {
        void Add<T> (T entity) where T : class;
        void Delete<T> (T entity) where T : class;
        Task<bool> SaveAll ();
        Task<IEnumerable<User>> GetUsers ();
        Task<User> GetUser (int id);
    }
}